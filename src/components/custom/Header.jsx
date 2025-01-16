import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"; 

function Header() {

  const user=JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false); // Fixed spelling of 'openDialog'

  useEffect(()=>{
console.log(user)
  },[])
  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "Application/json",
        },
      })
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false); // Close the dialog
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        toast("Failed to fetch user profile.");
      });
  };

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src="/logo.svg" alt="Logo" />
      <div>
        {user?<div className='flex gap-2 items-center'>
          <a href="/create-trip">
          <Button variant="outline" className="rounded-full text-[#000000] border-[#000000] ">+ Create Trip</Button></a>
          <a href="/my-trips">
          <Button variant="outline" className="rounded-full text-[#000000] border-[#000000] ">My Trips</Button></a>
          <Button variant="outline" className="rounded-full text-[#000000] border-[#000000] " onClick={()=>{googleLogout();localStorage.clear();window.location.reload();}}>LogOut</Button>
          <img src={user.picture} alt="" className='w-[35px] h-[35px] rounded-full' />
        </div>:<Button onClick={()=>setOpenDialog(true)}>Sign In</Button>}</div>
        <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the App with Google authentication securely.</p>
              <Button  onClick={login} className="w-full mt-5 flex gap-4 items-center">
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Header
