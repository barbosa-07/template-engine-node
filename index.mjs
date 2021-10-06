import {readFile, writeFile} from 'fs/promises';
import {sampleTemplateData, myTemplateData} from './config.mjs'

//  reading file using URL
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

//check for my template data

const checkMyTemplate = (myTemplateData) => {
    for (let [k,v] of Object.entries(myTemplateData)){
        if(v=== ""){
            return false
        }else {
            return true
        }
    }
}




// Change this with your data
const data = checkMyTemplate(myTemplateData) ? myTemplateData : sampleTemplateData



for ( let [k, v] of Object.entries(data)){
    template = template.replace(`{${k}}`, v)
}

await writeFile(new URL(data.fileName, import.meta.url), template)



