const NodeMediaServer = require( 'node-media-server' );

const envKey = 'RTMP_GW_KEY';
const envCert = 'RTMP_GW_CERT';

const opts = {
	keyPath: process.env[ envKey ],
	certPath: process.env[ envCert ],
};

if ( !opts.keyPath )
{
	throw new Error( `please provide please provide env var ${envKey} ` );
}

if ( !opts.certPath )
{
	throw new Error( `please provide please provide env var ${certPath} ` );
}

const https = {
	port: 1933,
	key: opts.keyPath,
	cert: opts.certPath,
	allow_origin: '*'
};

const http = {
	port: 1934,
	allow_origin: '*'
};

const rtmp = {
	port: 1935,
	chunk_size: 60000,
	gop_cache: true,
	ping: 30,
	ping_timeout: 60
};

const nms = new NodeMediaServer( { rtmp, http, https } );
nms.run();

