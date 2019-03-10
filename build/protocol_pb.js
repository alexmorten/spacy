/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.server.Action', null, global);
goog.exportSymbol('proto.server.Credentials', null, global);
goog.exportSymbol('proto.server.Empty', null, global);
goog.exportSymbol('proto.server.MoveAction', null, global);
goog.exportSymbol('proto.server.State', null, global);
goog.exportSymbol('proto.server.Vector', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.Vector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.Vector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.Vector.displayName = 'proto.server.Vector';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.Vector.prototype.toObject = function(opt_includeInstance) {
  return proto.server.Vector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.Vector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Vector.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    y: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.Vector}
 */
proto.server.Vector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.Vector;
  return proto.server.Vector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.Vector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.Vector}
 */
proto.server.Vector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.Vector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.Vector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.Vector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Vector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.server.Vector.prototype.getX = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.server.Vector.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.server.Vector.prototype.getY = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.server.Vector.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.MoveAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.MoveAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.MoveAction.displayName = 'proto.server.MoveAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.MoveAction.prototype.toObject = function(opt_includeInstance) {
  return proto.server.MoveAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.MoveAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.MoveAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    pos: (f = msg.getPos()) && proto.server.Vector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.MoveAction}
 */
proto.server.MoveAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.MoveAction;
  return proto.server.MoveAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.MoveAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.MoveAction}
 */
proto.server.MoveAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.server.Vector;
      reader.readMessage(value,proto.server.Vector.deserializeBinaryFromReader);
      msg.setPos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.MoveAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.MoveAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.MoveAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.MoveAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.server.Vector.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vector pos = 1;
 * @return {?proto.server.Vector}
 */
proto.server.MoveAction.prototype.getPos = function() {
  return /** @type{?proto.server.Vector} */ (
    jspb.Message.getWrapperField(this, proto.server.Vector, 1));
};


/** @param {?proto.server.Vector|undefined} value */
proto.server.MoveAction.prototype.setPos = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.server.MoveAction.prototype.clearPos = function() {
  this.setPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.server.MoveAction.prototype.hasPos = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.server.Action.oneofGroups_);
};
goog.inherits(proto.server.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.Action.displayName = 'proto.server.Action';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.server.Action.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.server.Action.TypeCase = {
  TYPE_NOT_SET: 0,
  MOVE: 2
};

/**
 * @return {proto.server.Action.TypeCase}
 */
proto.server.Action.prototype.getTypeCase = function() {
  return /** @type {proto.server.Action.TypeCase} */(jspb.Message.computeOneofCase(this, proto.server.Action.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.server.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentials: (f = msg.getCredentials()) && proto.server.Credentials.toObject(includeInstance, f),
    move: (f = msg.getMove()) && proto.server.MoveAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.Action}
 */
proto.server.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.Action;
  return proto.server.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.Action}
 */
proto.server.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.server.Credentials;
      reader.readMessage(value,proto.server.Credentials.deserializeBinaryFromReader);
      msg.setCredentials(value);
      break;
    case 2:
      var value = new proto.server.MoveAction;
      reader.readMessage(value,proto.server.MoveAction.deserializeBinaryFromReader);
      msg.setMove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentials();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.server.Credentials.serializeBinaryToWriter
    );
  }
  f = message.getMove();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.server.MoveAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional Credentials credentials = 1;
 * @return {?proto.server.Credentials}
 */
proto.server.Action.prototype.getCredentials = function() {
  return /** @type{?proto.server.Credentials} */ (
    jspb.Message.getWrapperField(this, proto.server.Credentials, 1));
};


/** @param {?proto.server.Credentials|undefined} value */
proto.server.Action.prototype.setCredentials = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.server.Action.prototype.clearCredentials = function() {
  this.setCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.server.Action.prototype.hasCredentials = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MoveAction move = 2;
 * @return {?proto.server.MoveAction}
 */
proto.server.Action.prototype.getMove = function() {
  return /** @type{?proto.server.MoveAction} */ (
    jspb.Message.getWrapperField(this, proto.server.MoveAction, 2));
};


/** @param {?proto.server.MoveAction|undefined} value */
proto.server.Action.prototype.setMove = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.server.Action.oneofGroups_[0], value);
};


proto.server.Action.prototype.clearMove = function() {
  this.setMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.server.Action.prototype.hasMove = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.State = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.State, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.State.displayName = 'proto.server.State';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.State.prototype.toObject = function(opt_includeInstance) {
  return proto.server.State.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.State} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.State.toObject = function(includeInstance, msg) {
  var f, obj = {
    jsonState: msg.getJsonState_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.State}
 */
proto.server.State.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.State;
  return proto.server.State.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.State} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.State}
 */
proto.server.State.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJsonState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.State.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.State.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.State} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.State.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJsonState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes json_state = 1;
 * @return {string}
 */
proto.server.State.prototype.getJsonState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes json_state = 1;
 * This is a type-conversion wrapper around `getJsonState()`
 * @return {string}
 */
proto.server.State.prototype.getJsonState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJsonState()));
};


/**
 * optional bytes json_state = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJsonState()`
 * @return {!Uint8Array}
 */
proto.server.State.prototype.getJsonState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJsonState()));
};


/** @param {!(string|Uint8Array)} value */
proto.server.State.prototype.setJsonState = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.Credentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.Credentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.Credentials.displayName = 'proto.server.Credentials';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.Credentials.prototype.toObject = function(opt_includeInstance) {
  return proto.server.Credentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.Credentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Credentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.Credentials}
 */
proto.server.Credentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.Credentials;
  return proto.server.Credentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.Credentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.Credentials}
 */
proto.server.Credentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.Credentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.Credentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.Credentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Credentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.server.Credentials.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.server.Credentials.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.server.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.server.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.server.Empty.displayName = 'proto.server.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.server.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.server.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.server.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.server.Empty}
 */
proto.server.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.server.Empty;
  return proto.server.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.server.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.server.Empty}
 */
proto.server.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.server.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.server.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.server.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.server.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.server);
