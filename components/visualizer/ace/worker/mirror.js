define(function(require, exports, module) {
"use strict";

var Document = require("../document").Document;
var lang = require("../lib/lang");
    
var Mirror = exports.Mirror = function(sender) {
    this.sender = sender;
    var doc = this.doc = new Document("");
    
    var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));
    
    var _self = this;
    sender.on("change", function(e) {
        var data = e.data;
        if (data[0].start) {
            doc.applyDeltas(data);
        } else {
            for (var i = 0; i < data.length; i += 2) {
                var d, err; 
                if (Array.isArray(data[i+1])) {
                    d = {action: "insert", start: data[i], lines: data[i+1]};
                } else {
                    d = {action: "remove", start: data[i], end: data[i+1]};
                }
                
                if ((d.action == "insert" ? d.start : d.end).row >= doc.$lines.length) {
                    err = new Error("Invalid delta");
                    err.data = {
                        path: _self.$path,
                        linesLength: doc.$lines.length,
                        start: d.start,
                        end: d.end
                    };
                    throw err;
                }

                doc.applyDelta(d, true);
            }
        }
        if (_self.$timeout)
            return deferredUpdate.schedule(_self.$timeout);
        _self.onUpdate();
    });
};

(function() {
    
    this.$timeout = 500;
    
    this.setTimeout = function(timeout) {
        this.$timeout = timeout;
    };
    
    this.setValue = function(value) {
        this.doc.setValue(value);
        this.deferredUpdate.schedule(this.$timeout);
    };
    
    this.getValue = function(callbackId) {
        this.sender.callback(this.doc.getValue(), callbackId);
    };
    
    this.onUpdate = function() {
        // abstract method
    };
    
    this.isPending = function() {
        return this.deferredUpdate.isPending();
    };
    
}).call(Mirror.prototype);

});
