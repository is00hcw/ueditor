module( ".path" );

/*trace 3683*/
test( '路径查找测试', function () {
    equal( UE.getUEBasePath( 'http://www.baidu.com/', './ueditor.config.js' ), 'http://www.baidu.com/', 'WEB路径-当前目录下' );
    equal( UE.getUEBasePath( 'http://www.baidu.com/abc/def/', '../ueditor.config.js' ), 'http://www.baidu.com/abc/', 'WEB路径-父目录1' );
    equal( UE.getUEBasePath( 'http://www.baidu.com/abc/def', '../ueditor.config.js' ), 'http://www.baidu.com/', 'WEB路径-父目录2' );

    equal( UE.getUEBasePath( 'file:///home/hn/a/ueditor/_examples/completeDemo.html', './ueditor.config.js' ), 'file:///home/hn/a/ueditor/_examples/', '本地路径-linux-当前目录1' );
    equal( UE.getUEBasePath( 'file:///home/hn/a/ueditor/_examples/completeDemo.html', 'ueditor.config.js' ), 'file:///home/hn/a/ueditor/_examples/', '本地路径-linux-当前目录2' );
    equal( UE.getUEBasePath( 'file:///home/hn/a/ueditor/_examples/completeDemo.html', '../ueditor.config.js' ), 'file:///home/hn/a/ueditor/', '本地路径-linux-父目录1' );
    equal( UE.getUEBasePath( 'file:///home/hn/a/ueditor/_examples/completeDemo.html', './../ueditor.config.js' ), 'file:///home/hn/a/ueditor/', '本地路径-linux-父目录2' );

    equal( UE.getUEBasePath( 'file://C:\\webroot\\ueditor\\_examples\\completeDemo.html', './ueditor.config.js' ), 'file://C:/webroot/ueditor/_examples/', '本地路径-windows-当前目录1' );
    equal( UE.getUEBasePath( 'file://C:\\webroot\\ueditor\\_examples\\completeDemo.html', 'ueditor.config.js' ), 'file://C:/webroot/ueditor/_examples/', '本地路径-windows-当前目录2' );
    equal( UE.getUEBasePath( 'file://C:\\webroot\\ueditor\\_examples\\completeDemo.html', '../ueditor.config.js' ), 'file://C:/webroot/ueditor/', '本地路径-windows-父目录1' );
    equal( UE.getUEBasePath( 'file://C:\\webroot\\ueditor\\_examples\\completeDemo.html', './../ueditor.config.js' ), 'file://C:/webroot/ueditor/', '本地路径-windows-父目录2' );
} );