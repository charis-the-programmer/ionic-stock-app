import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { AboutPage } from '../pages/about/about'
import { SearchPage } from '../pages/search/search'
import { ModifyPage } from '../pages/modify/modify'
import { DetailsPage } from '../pages/details/details'
import { WelcomePage } from '../pages/welcome/welcome'
import { StockCharts } from '../pages/details/stockchart'

import {StockService} from '../providers/stock'
import { LocalData } from '../providers/local-data'
import { PriceDiff } from '../providers/price-diff'
import {Config} from '../providers/config'

@NgModule({
  declarations: [
		PriceDiff,
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    ModifyPage,
    DetailsPage,
    WelcomePage,
    StockCharts
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp,{},{
      links:[
        { component: HomePage, name: 'HomePage', segment: 'home/:type' },
        { component: DetailsPage, name: 'DetailsPage', segment: 'detials/:code',defaultHistory: [ HomePage ] },
        { component: ModifyPage, name: 'ModifyPage', segment: 'modify' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
      ]
    }),
		IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SearchPage,
    ModifyPage,
    DetailsPage,
    WelcomePage
  ],
  providers: [
		StockService,
    LocalData,
    Config,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
