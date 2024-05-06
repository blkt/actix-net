(function() {var implementors = {
"actix_service":[],
"actix_tls":[["impl&lt;IO: ActixStream + 'static&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/native_tls/struct.AcceptorService.html\" title=\"struct actix_tls::accept::native_tls::AcceptorService\">AcceptorService</a>"],["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/openssl/struct.AcceptorService.html\" title=\"struct actix_tls::accept::openssl::AcceptorService\">AcceptorService</a>"],["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/rustls_0_20/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls_0_20::AcceptorService\">AcceptorService</a>"],["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/rustls_0_21/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls_0_21::AcceptorService\">AcceptorService</a>"],["impl&lt;IO: ActixStream&gt; Service&lt;IO&gt; for <a class=\"struct\" href=\"actix_tls/accept/rustls_0_22/struct.AcceptorService.html\" title=\"struct actix_tls::accept::rustls_0_22::AcceptorService\">AcceptorService</a>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/native_tls/struct.TlsConnector.html\" title=\"struct actix_tls::connect::native_tls::TlsConnector\">TlsConnector</a><div class=\"where\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream + 'static,</div>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/openssl/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::openssl::TlsConnectorService\">TlsConnectorService</a><div class=\"where\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</div>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/rustls_0_20/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::rustls_0_20::TlsConnectorService\">TlsConnectorService</a><div class=\"where\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</div>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/rustls_0_21/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::rustls_0_21::TlsConnectorService\">TlsConnectorService</a><div class=\"where\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</div>"],["impl&lt;R, IO&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.Connection.html\" title=\"struct actix_tls::connect::Connection\">Connection</a>&lt;R, IO&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/rustls_0_22/struct.TlsConnectorService.html\" title=\"struct actix_tls::connect::rustls_0_22::TlsConnectorService\">TlsConnectorService</a><div class=\"where\">where\n    R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>,\n    IO: ActixStream,</div>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ConnectorService.html\" title=\"struct actix_tls::connect::ConnectorService\">ConnectorService</a>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/struct.ResolverService.html\" title=\"struct actix_tls::connect::ResolverService\">ResolverService</a>"],["impl&lt;R: <a class=\"trait\" href=\"actix_tls/connect/trait.Host.html\" title=\"trait actix_tls::connect::Host\">Host</a>&gt; Service&lt;<a class=\"struct\" href=\"actix_tls/connect/struct.ConnectInfo.html\" title=\"struct actix_tls::connect::ConnectInfo\">ConnectInfo</a>&lt;R&gt;&gt; for <a class=\"struct\" href=\"actix_tls/connect/tcp/struct.TcpConnectorService.html\" title=\"struct actix_tls::connect::tcp::TcpConnectorService\">TcpConnectorService</a>"]],
"actix_tracing":[["impl&lt;S, Req, F&gt; Service&lt;Req&gt; for <a class=\"struct\" href=\"actix_tracing/struct.TracingService.html\" title=\"struct actix_tracing::TracingService\">TracingService</a>&lt;S, F&gt;<div class=\"where\">where\n    S: Service&lt;Req&gt;,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Req</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Span&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()