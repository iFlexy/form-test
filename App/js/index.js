// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
Class.destroy('App');
Class('App', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[code created by CrossUIUI Builder
            var host=this, children=[], append=function(child){children.push(child.get(0));
                                                            };
            append((newxui.UI.SLabel)
                   .setHost(host,"slabel1").setLeft(80).setTop(60).setWidth(44).setCaption("Name:") );
            append((newxui.UI.SLabel)
                   .setHost(host,"slabel2").setLeft(80).setTop(90).setCaption("Age:").setWidth(44));
            append((newxui.UI.Input)
                   .setHost(host,"iName").setLeft(130).setTop(60).setValueFormat("[^.*]").setValue("Jack"));
            append((newxui.UI.ComboInput)
                   .setHost(host,"iAge").setLeft(130).setTop(90).setType("spin").setIncrement(1).setMin(20).setMax(60).setValue("35"));
            append((newxui.UI.SCheckBox)
                   .setHost(host,"cFull").setLeft(130).setTop(130).setCaption("Full time"));
            append((newxui.UI.SButton).setHost(host,"submit")
                   .setLeft(130).setTop(170).setCaption("SUBMIT").onClick("_submit_onclick"));
            return children;
            // ]]code created by CrossUIUI Builder
        },
        _submit_onclick:function(profile, e, src, value) {
            if(!this.iName.checkValid()){
                xui.alert('You must specify Name');
                return;
            }
            var name=this.iName.updateValue().getValue(),age=this.iAge.updateValue().getValue(),
                full=this.cFull.updateValue().getValue(); 
        }     
    }
});
            