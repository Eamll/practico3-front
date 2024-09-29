import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLocaleData } from '@angular/common';
import localeEsBO from '@angular/common/locales/es-BO';

import { AppModule } from './app/app.module';


registerLocaleData(localeEsBO, 'es-BO');

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
