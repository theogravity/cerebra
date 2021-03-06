/**
 * Copyright 2017 Yahoo Holdings Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in project root for terms.
 */

var Cerebro = require('../../../build/cerebro').Cerebro
var configuration = require('../../fixtures/dependent/enabled.js')
var cerebro = new Cerebro(configuration)

/**
 * A performance test that tests cross setting dependencies
 */
module.exports = function () {
  var context = {
    farm: '123'
  }
  var cerebroConfig = cerebro.resolveConfig(context)

  cerebroConfig.isEnabled('dependent')
}
