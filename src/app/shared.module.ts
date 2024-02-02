import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipesModule } from './shared/pipes/pipes.module';

import { AccordionComponent } from './shared/components/accordion/accordion.component';
// import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CoinComponent } from './shared/components/coin-info/coin-info.component';
import { ContentTitleComponent } from './shared/components/content-title/content-title.component';
import { CustomFormComponent } from './shared/components/custom-form/custom-form.component';
import { CustomImageComponent } from './shared/components/custom-image/custom-image.component';
import { DonationsComponent } from './shared/components/donations/donations.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HistoryMoneyComponent } from './shared/components/history-money/history-money.component';
import { LinkableIconContainerComponent } from './shared/components/linkable-icon-container/linkable-icon-container.component';
import { LinkableIconComponent } from './shared/components/linkable-icon/linkable-icon.component';
import { MessageManagerComponent } from './shared/components/message-manager/message-manager.component';
import { ModalDialogComponent } from './shared/components/modal-dialog/modal-dialog.component';
import { ModalSelectorComponent } from './shared/components/modal-selector/modal-selector.component';
import { StarRankComponent } from './shared/components/star-rank/star-rank.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { VideoResponsiveComponent } from './shared/components/video-responsive/video-responsive.component';

@NgModule({
  declarations: [
    AccordionComponent,
    // CarouselComponent,
    CoinComponent,
    ContentTitleComponent,
    CustomFormComponent,
    CustomImageComponent,
    DonationsComponent,
    GalleryComponent,
    HistoryMoneyComponent,
    LinkableIconContainerComponent,
    LinkableIconComponent,
    MessageManagerComponent,
    ModalDialogComponent,
    ModalSelectorComponent,
    StarRankComponent,
    TestimonialsComponent,
    ToolbarComponent,
    VideoResponsiveComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    PipesModule,
    AccordionComponent,
    // CarouselComponent,
    CoinComponent,
    ContentTitleComponent,
    CustomFormComponent,
    CustomImageComponent,
    DonationsComponent,
    GalleryComponent,
    HistoryMoneyComponent,
    LinkableIconContainerComponent,
    LinkableIconComponent,
    MessageManagerComponent,
    ModalDialogComponent,
    ModalSelectorComponent,
    StarRankComponent,
    TestimonialsComponent,
    ToolbarComponent,
    VideoResponsiveComponent,
  ]
})
export class SharedModule { }
