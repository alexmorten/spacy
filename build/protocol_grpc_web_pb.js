/**
 * @fileoverview gRPC-Web generated client stub for server
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.server = require('./protocol_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.server.SpacyServerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.server.SpacyServerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.server.SpacyServerClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.server.SpacyServerClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.Empty,
 *   !proto.server.Credentials>}
 */
const methodInfo_SpacyServer_GetCredentials = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.Credentials,
  /** @param {!proto.server.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.Credentials.deserializeBinary
);


/**
 * @param {!proto.server.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.Credentials)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.Credentials>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerClient.prototype.getCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.SpacyServer/GetCredentials',
      request,
      metadata,
      methodInfo_SpacyServer_GetCredentials,
      callback);
};


/**
 * @param {!proto.server.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.Credentials>}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerPromiseClient.prototype.getCredentials =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getCredentials(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.Credentials,
 *   !proto.server.State>}
 */
const methodInfo_SpacyServer_GetUpdates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.State,
  /** @param {!proto.server.Credentials} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.State.deserializeBinary
);


/**
 * @param {!proto.server.Credentials} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.server.State>}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerClient.prototype.getUpdates =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/server.SpacyServer/GetUpdates',
      request,
      metadata,
      methodInfo_SpacyServer_GetUpdates);
};


/**
 * @param {!proto.server.Credentials} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.server.State>}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerPromiseClient.prototype.getUpdates =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/server.SpacyServer/GetUpdates',
      request,
      metadata,
      methodInfo_SpacyServer_GetUpdates);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.Action,
 *   !proto.server.Empty>}
 */
const methodInfo_SpacyServer_Act = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.Empty,
  /** @param {!proto.server.Action} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.Empty.deserializeBinary
);


/**
 * @param {!proto.server.Action} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerClient.prototype.act =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.SpacyServer/Act',
      request,
      metadata,
      methodInfo_SpacyServer_Act,
      callback);
};


/**
 * @param {!proto.server.Action} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.Empty>}
 *     The XHR Node Readable Stream
 */
proto.server.SpacyServerPromiseClient.prototype.act =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.act(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.server;

