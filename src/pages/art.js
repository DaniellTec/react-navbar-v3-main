import React from 'react'
import '../css/styles.css';

import PlusIcon from '../images/artists/plus.svg';

import { BsPlusCircleFill } from "react-icons/bs";

const Art = () => {
    return (
      <> 
        <div>
          <br/><br/>
            <h1 className="center"> 
                Drawings<br/><br/>
            </h1>
        </div>    
        
        <table>
    <tr>
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} width="200" height="200" className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
        
    </tr>
</table>
<br/>
<table>
    <tr>
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} width="200" height="200" className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PlusIcon} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
        
    </tr>
</table>

      </>
    );
  };
  
  export default Art;
