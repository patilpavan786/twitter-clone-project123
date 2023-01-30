import React, { useState ,useRef} from "react";
import style from "./whatHappening.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../../Atom/Button/CustomButton";
import {tweetPosts} from "../../ConstData/ConstData";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isTweetPost } from "../../Recoil/Atom1/Atom";

function WhatHappening() {

  const[storeArray,setStoreArray]=useState("")
  const inputRef = useRef(null)
  const [loginStatus,setLoginStatus] = useRecoilState(isTweetPost);
  const [image,setImage] = useState('')
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage /> ,  action : 'pickImage' },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];

      // function to triiger picking image imput
      function handleOnClickIcon (action) {
        if(action === 'pickImage'){       
            inputRef.current.click()
        }
    }

    // Function to pick image 
    function handleOnSelectImage (e) {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            inputRef.current = null 
        };
        reader.readAsDataURL(e.target.files[0]);
    }

  function takeTweet(e)
  {
    setStoreArray(e.target.value)
    
  }
  function handleNewTweet()
  {
    
   
    
  let newObj={

      name  : 'Profile Name',
      handlerName : '@Profile Handler' ,
      organization : 'United States government organization',
      tweetText : storeArray,
     
     
  
      tweetCount : 100,
      retweetCount : 100 ,
      likesCount : 100,
      viewsCount : '102k',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022'

    }
   
    tweetPosts.unshift(newObj);
    // console.log(tweetPosts)
    // setForTrue(forTrue+1)
    setLoginStatus(loginStatus+1);
    
  }
  

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          <div className={style.wrapper}>
            <textarea  placeholder="What's happening?" rows={8} cols={60} onChange={takeTweet} />
            <div className={style.privacy}>
              <FaGlobe />
              <span>Everyone can reply</span>
            </div>
            <div className={style.bottom}>
              {Icons.map((menu,action) => {
                return (
                  <ul className={style.icons}key={menu.id}>
                    <li  onClick={() => handleOnClickIcon(action) }
                    >{menu.icon}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />
          <CustomButton
            buttonText="Tweet"

            btnNext={handleNewTweet} 
           
            
            customCss={style.button}
          />
        </div>
      </div>
    </>
  );
}

export default WhatHappening;