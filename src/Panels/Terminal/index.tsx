import React from 'react'
import { ReactTerminal } from "react-terminal";
import commands from './commands'
const Terminal = () => {


    return (
        <>
        <ReactTerminal
        commands={commands}
            showControlButtons={false}
                themes={{
                    myCustomTheme: {
                        themeBGColor: "#5c3095",
                        themeToolbarColor: "#5c3095",
                        themeColor: "#FFFEFC",
                        themePromptColor: "#a917a8",
                        maxWidth:'100%',
                        minWidth:'100%',
                        maxHeight: 'calc(100% - 60%)',
                        minHeight: 'calc(100% - 60%)',
                        height: 'calc(100% - 60%)',
                        width:'100%',
                        overflow:'hidden',
                        
                    }
                }}
            theme="myCustomTheme"
            prompt="$imabp>"
        />
        </>
    );
}
export default Terminal;