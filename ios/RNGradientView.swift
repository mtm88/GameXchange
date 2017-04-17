//
//  RNGradientView.swift
//  AwesomeProject
//
//  Created by Michal Tara on 15/04/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import GradientView
@objc(RNGradientView)
class RNGradientView : GradientView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setLocations(locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat});
  }
  
  func setColors(colors: NSArray) {
    self.colors = colors.map({return RCTConvert.UIColor($0)})
  }
}
