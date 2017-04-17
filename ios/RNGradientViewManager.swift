//
//  RNGradientViewManager.swift
//  AwesomeProject
//
//  Created by Michal Tara on 15/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

@objc(RNLinearGradientSwift)
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
}
