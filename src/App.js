import './styles.css';
import {MyButton} from "./components/MyButton";
import {MyCheckbox} from "./components/MyCheckbox";
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import {MyInput} from "./components/MyInput";
import {MySelector} from "./components/MySelector";

import {MyNavButton} from "./components/MyNavButton";
import {Asynchronous, FreeSolo, FreeSoloCreateOption, MySearch} from "./components/MySearch";
import {BadgeAvatars, ImageAvatars} from "./components/MyAvatar";
import {SlickSlider2} from "./components/SlickSlider2";

function App() {
  return (
    <div className="App">
      <MyButton variant="contained" disabled >Call to Action</MyButton>
      <MyButton variant="contained" color='error'>Call to Action</MyButton>

      <MyButton variant="contained" >Call to Action</MyButton>
      <MyButton size="smallWithIcon" variant="contained" endIcon={<PlaylistAddCheckRoundedIcon sx={{fontSize: '16px'}}/>} >Call to Action</MyButton>
      <MyButton size="smallWithIcon" variant="outlined" startIcon={<ExitToAppRoundedIcon sx={{fontSize: '16px'}}/>}>Call to Action</MyButton>
      <MyButton size="iconSmall" variant="outlined">
        <PersonOutlineOutlinedIcon
          sx={{fontSize: '16px'}}/>
      </MyButton>

      <MyButton size="medium" variant="contained">Call to Action</MyButton>
      <MyButton size="mediumWithIcon" variant="outlined" startIcon={<WorkOutlineOutlinedIcon/>}>Call to Action</MyButton>
      <MyButton size="iconMedium" variant="outlined">
        <LeaderboardOutlinedIcon/>
      </MyButton>
      <MyButton size="iconMedium" variant="contained">
        <ChevronLeftOutlinedIcon/>
      </MyButton>

      <MyButton size="large" variant="contained">Call to Action</MyButton>
      <MyButton size="largeWithIcon" variant="outlined" startIcon={<SyncAltRoundedIcon/>}>Call to Action</MyButton>
      <MyButton size="iconLarge" variant="outlined">
        <CachedRoundedIcon/>
      </MyButton>
      <MyButton size="iconLarge" variant="contained">
        <ChevronRightOutlinedIcon/>
      </MyButton>

      <MyNavButton/>

      <MyInput/>
      <MyInput disabled/>
      <MyInput error helperText="Incorrect entry"/>



      <MyCheckbox label="1" />
      <MyCheckbox defaultChecked label="2" />
      <MyCheckbox disabled label="3" />


      <MySelector/>

      <MySearch/>
      <Asynchronous/>
      <FreeSoloCreateOption/>

      <ImageAvatars/>
      <BadgeAvatars/>

      <FreeSolo/>
        {/*<SlickSlider2/>*/}


    </div>
  );
}

export default App;
