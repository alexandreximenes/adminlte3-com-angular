import {Routes} from '@angular/router'
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'

export const ROUTES: Routes = [
    
    {path: '**', component: PageNotfoundComponent}
    
]