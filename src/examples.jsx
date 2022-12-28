import {MyButton} from "./components/MyUI/MyButton";
import {MyCheckbox} from "./components/MyUI/MyCheckbox";
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import {MyInput} from "./components/MyUI/MyInput";
import {MySelector} from "./components/MyUI/MySelector";

import {PrevButton, NextButton} from "./components/MyUI/MyNavButton";
import {Asynchronous, FreeSolo, FreeSoloCreateOption, MySearch} from "./components/MyUI/MySearch";
import {BadgeAvatars, ImageAvatars} from "./components/MyUI/MyAvatar";
import {WalletsSlider} from "./components/MyUI/Sliders/WalletsSlider";

import {CurrencySlider} from "./components/MyUI/Sliders/CurrencySlider";

import React from 'react';
import {MyModal} from "./components/MyUI/MyModal";

const Examples = () => {
  return (
    <div>
      <MyButton variant="contained" disabled>Call to Action</MyButton>
      <MyButton variant="contained" color='error'>Call to Action</MyButton>

      <MyButton variant="contained">Call to Action</MyButton>

      <MyButton size="smallWithIcon" variant="contained"
                endIcon={<PlaylistAddCheckRoundedIcon sx={{fontSize: '16px'}}/>}>Call to Action</MyButton>
      <MyButton size="smallWithIcon" variant="outlined"
                startIcon={<ExitToAppRoundedIcon sx={{fontSize: '16px'}}/>}>Call to Action</MyButton>
      <MyButton size="iconSmall" variant="outlined">
        <PersonOutlineOutlinedIcon
          sx={{fontSize: '16px'}}/>
      </MyButton>

      <MyButton size="medium" variant="contained">Call to Action</MyButton>
      <MyButton size="mediumWithIcon" variant="outlined" startIcon={<WorkOutlineOutlinedIcon/>}>Call to
        Action</MyButton>
      <MyButton size="iconMedium" variant="outlined">
        <LeaderboardOutlinedIcon/>
      </MyButton>
      <MyButton size="iconMedium" variant="contained">
        <ChevronLeftOutlinedIcon/>
      </MyButton>

      <MyButton size="large" variant="contained">Call to Action</MyButton>
      <MyButton size="largeWithIcon" variant="outlined" startIcon={<SyncAltRoundedIcon/>}>Call to
        Action</MyButton>
      <MyButton size="iconLarge" variant="outlined">
        <CachedRoundedIcon/>
      </MyButton>
      <MyButton size="iconLarge" variant="contained">
        <ChevronRightOutlinedIcon/>
      </MyButton>


      <PrevButton/>
      <NextButton/>
      <PrevButton disabled/>
      <NextButton disabled/>

      <MyInput/>
      <MyInput disabled/>
      <MyInput error helperText="Incorrect entry"/>


      <MyCheckbox label="1"/>
      <MyCheckbox defaultChecked label="2"/>
      <MyCheckbox disabled label="3"/>


      <MySelector/>
      <CurrencySlider/>

      <MySearch fullWidth/>
      {/*<Asynchronous/>*/}
      {/*<FreeSoloCreateOption/>*/}

      {/*<ImageAvatars/>*/}
      {/*<BadgeAvatars/>*/}

      {/*<FreeSolo/>*/}

      <WalletsSlider/>
      <MyModal/>
    </div>
  );
};

export default Examples;