# contextMenu
Easy to use contextMenu (jquery plugin  for starters who are learning to  wirite plugins );

Mini lightweight jQuery contextMenu for web developers.

Example usage

    var contextMenuLists = {
        lists:  [{ 
                    name : 'Copy', 
                    icon: 'copy',
                    onClickFunc: 'copyFunction', 
                    argument: parent,
                    html_attributes : "required"
                },
                { 
                    name : 'Edit', 
                    icon: 'pencil', 
                    onClickFunc: 'edit_tblStruct',
                    argument: parent,
                    html_attributes : "required"
                }, 
                {
                    name : 'Delete',
                    icon: 'trash', 
                    onClickFunc: 'deleteTable',  
                    argument: parent,  
                    html_attributes : "required"
                } ]
    };
    $(parent).contextMenus( contextMenuLists, parent );
