import React from 'react'
import style2 from "./UserTweet.module.css"
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import {Personaltweet} from "../../../../Recoil/Atom1/Atom"
import { useRecoilState } from 'recoil'
function UserTweet() {
    const [data,setData]= useRecoilState(Personaltweet)
    
    console.log(data);
  return (

    <>
    {data.map((x)=>{
        return(
            <h1>{x.name}</h1>
        )
    })}
    </>
  )
}

export default UserTweet



{/* <div className={style2.wrapper}>
    <div className={style2.container1}>
              <div >
              
                <Avatar   className={style2.avatar} src={data.tweetPic} />
               
              </div>

              <div className={style2.innercontainer}>
                <span className={style2.text}>
                  <h3>{data.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                </span>
                <p>{data.tweetText}</p>
              </div>
            </div>

            <div className={style2.img}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="picture"
                src={data.tweetPic}
              />
            </div>
            <div className={style2.icons}>
                  <span>
                    {data.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {data.likesCount}
                    <FavoriteBorderIcon />
                  </span>
                  <span>
                    {data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
  
    </div> */}