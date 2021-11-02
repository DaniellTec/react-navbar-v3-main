import React from 'react'
import '../css/styles.css';

import PlusIcon from '../images/artists/plus.svg';
import Legoshi from '../images/keychains/keychain1.jpg';
import Rouis from '../images/keychains/keychain2.jpg';
import Jack from '../images/keychains/keychain3.jpg';
import Gouhin from '../images/keychains/keychain4.jpg';
import PoseOne from '../images/keychains/keychain5.jpg';

import { BsPlusCircleFill } from "react-icons/bs";

const Keychains = () => {
    return (
      <> 
        <div>
            <br/><br/>
            <h1 className="center"> 
                Keychains<br/><br/>
            </h1>
        </div>    
        <table>
    <tr>
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Legoshi} className="items"/>
            </a>
            <center><td className="tdt">Legoshi</td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Rouis} width="200" height="200" className="items"/>
            </a>
            <center><td className="tdt">Rouis</td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Jack} className="items"/>
            </a>
            <center><td className="tdt">Juno</td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Gouhin} className="items"/>
            </a>
            <center><td className="tdt">Gouhin</td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={PoseOne} className="items"/>
            </a>
            <center><td className="tdt">PoseOne</td></center> 
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
  
  export default Keychains;