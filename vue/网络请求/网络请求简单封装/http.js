// import axios from 'axios'

const  fetch = async (url, data) => {

  try {
    let result = await axios.get(url, {
      params: data
    }) 
    result = result.data
    return new Promise((resolve, reject)=>{
      if(result.code === 0){
        resolve(result)
      }else{
        reject(result)
      }
    })
  } catch (error) {
    throw new Error(error);
  }
}

