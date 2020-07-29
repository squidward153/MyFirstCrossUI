xui.Class('App', 'xui.Module',{
    Instance:{
        Dependencies:[],
        Required:[],
        properties : {},
        initialize : function(){
        },
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setLeft("20.571428571428573em")
                .setTop("19.80952380952381em")
                .setWidth("13.866666666666667em")
                .setHeight("8.761904761904763em")
                .setCaption("9+10=21")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"didweird")
                .setDirtyMark(false)
                .setLeft("16.761904761904763em")
                .setTop("24.38095238095238em")
                .setWidth("17.37142857142857em")
                .setHeight("11.885714285714286em")
                .setCaption("Button")
                .onClick("_firstFunk")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        
        _firstFunk:function(){
            alert("No, 9 + 10 = 19!!");
        },
        
        customAppend : function(parent, subId, left, top){
            return false;
        }

    }
});