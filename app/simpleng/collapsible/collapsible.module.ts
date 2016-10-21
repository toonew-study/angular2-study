/**
 * Created by Rain on 2016/10/20.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CollapsibleComponent} from "./collapsible.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CollapsibleComponent],
  exports: [CollapsibleComponent]
})
export class CollapsibleModule {
}