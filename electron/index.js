const path = require("path")
const glob = require("glob")

//controlar el ciclo de vida de la app
//acceso al gestor de ventanas de Chronium

const {app,BrowserWindow,Menu} = require('electron')

//Referencia global a la venta principal
var mainWindow = null

//terminar la app cunado todas la ventanas se hallan cerrado
app.on('window-all-closed',function(){
    if(process.platform != 'darwin')
    app.quit()
})

//cuando todo se hay cargado, mediante el evento ready empezaremos a definir la app

let template = [{
    label: 'Menu Tecsup',
    submenu: [{
        label: 'HOla DAWA',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
    },{
        type:'separator'
    },{
        label:'View',
        submenu:[{
            label:'Reload',
            accelerator:'CmdOrCtrl+R',
            click: (item,focusedWindow)=>{
                if(focusedWindow){
                    if(focusedWindow.id===1){
                        BrowserWindow.getAllWindows().forEach(win=>{
                            if(win.id >1) win.close()
                        })
                    }
                    focusedWindow.reload()
                }
            }
        },{
            label: 'Toggle Full Screen',
            accelerator: (()=>{
                if(process.platform === ' darwin'){
                    return 'Ctrl+Command+F'
                }else{
                    return 'F11'
                }
            })(),
            click:(item,focusedWindow)=>{
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
            }
        },{
            type:'separator'
        },{
            label:'Toggle DeveloperTools',
            accelerator:(()=>{
                if(process.platform === 'darwin'){
                    return 'Alt+Command+I'
                }else{
                    return 'Ctrl+Shift+I'
                }
            })(),
            click:(item,focusedWindow)=>{
                if(focusedWindow){
                    focusedWindow.toogleDevTools()
                }
            }
        }]
    }]
}]

app.on('ready',function(){
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    mainWindow = new BrowserWindow({
        width:800,height:600
    })
    mainWindow.loadURL(`file//${__dirname}/index.html`)
   // mainWindow.openDevTools()
    mainWindow.on('closed',function(){
        mainWindow = null
    })
})