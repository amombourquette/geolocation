({
    doInit : function(component, event) {
        var action = component.get("c.findAll");
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
            var ev = $A.get("e.c:AccountsLoaded");
            ev.setParams({"accounts": a.getReturnValue()});
            ev.fire();
        });
    $A.enqueueAction(action);
    }
})