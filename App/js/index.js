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
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        customAppend : function(parent, subId, left, top){
            return false;
        }

    }
});