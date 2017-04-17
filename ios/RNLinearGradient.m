//
//  RNLinearGradient.m
//  AwesomeProject
//
//  Created by Michal Tara on 15/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RNLinearGradient.h"
#import "RCTViewManager.h"
@interface RCT_EXTERN_MODULE(RNLinearGradientSwift, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);
@end
