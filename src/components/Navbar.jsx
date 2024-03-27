import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  return (
<div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
   
   
  </div>
  <div className="navbar-center hidden lg:flex">
  {children}
  </div>
  
  <div className="navbar-end">
  <div className="dropdown dropdown-end">

<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg> 
</div>
<ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
<div className="form-control">
<label className="label cursor-pointer gap-4">
<span className="label-text">Default</span>
<input type="radio" name="theme-radios" className="radio theme-controller" value="default"/>
</label>
</div>
<div className="form-control">
<label className="label cursor-pointer gap-4">
<span className="label-text">Auqua</span>
<input type="radio" name="theme-radios" className="radio theme-controller" value="aqua"/>
</label>
</div>
<div className="form-control">
<label className="label cursor-pointer gap-4">
<span className="label-text">Cyberpunk</span>
<input type="radio" name="theme-radios" className="radio theme-controller" value="cyberpunk"/>
</label>
</div>
<div className="form-control">
<label className="label cursor-pointer gap-4">
<span className="label-text">Retro</span>
<input type="radio" name="theme-radios" className="radio theme-controller" value="retro"/>
</label>
</div>
<div className="form-control">
<label className="label cursor-pointer gap-4">
<span className="label-text">Pastel</span>
<input type="radio" name="theme-radios" className="radio theme-controller" value="pastel"/>
</label>
</div>
</ul>
</div>  
  </div>
</div>
  );
};

export default Navbar;
