import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { StatsComponent } from './stats/stats.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { InpirationAndProficiencyComponent } from './inpiration-and-proficiency/inpiration-and-proficiency.component';
import { AcInitiativeSpeedComponent } from './ac-initiative-speed/ac-initiative-speed.component';
import { CurrentTempHpComponent } from './current-temp-hp/current-temp-hp.component';
import { HitDiceComponent } from './hit-dice/hit-dice.component';
import { DeathSavesComponent } from './death-saves/death-saves.component';
import { ProficienciesAndLanguagesComponent } from './proficiencies-and-languages/proficiencies-and-languages.component';
import { FeaturesAndTraitsComponent } from './features-and-traits/features-and-traits.component';
import { TraitsIdealsBondsAndFlawsComponent } from './traits-ideals-bonds-and-flaws/traits-ideals-bonds-and-flaws.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { AlliesAnbdOrganisationsComponent } from './allies-anbd-organisations/allies-anbd-organisations.component';
import { CharacterBackstoryComponent } from './character-backstory/character-backstory.component';
import { AdditionalFeaturesAndTraitsComponent } from './additional-features-and-traits/additional-features-and-traits.component';
import { BasicInformationComponent } from './spells/basic-information/basic-information.component';
import { CantripsComponent } from './spells/cantrips/cantrips.component';
import { LevelOneComponent } from './spells/level-one/level-one.component';
import { LevelTwoComponent } from './spells/level-two/level-two.component';
import { LevelThreeComponent } from './spells/level-three/level-three.component';
import { LevelFourComponent } from './spells/level-four/level-four.component';
import { LevelFiveComponent } from './spells/level-five/level-five.component';
import { LevelSixComponent } from './spells/level-six/level-six.component';
import { LevelSevenComponent } from './spells/level-seven/level-seven.component';
import { LevelEightComponent } from './spells/level-eight/level-eight.component';
import { LevelNineComponent } from './spells/level-nine/level-nine.component';
import { SpellsComponent } from './spells/spells/spells.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SavingThrowsComponent,
    StatsComponent,
    EquipmentComponent,
    InpirationAndProficiencyComponent,
    AcInitiativeSpeedComponent,
    CurrentTempHpComponent,
    HitDiceComponent,
    DeathSavesComponent,
    ProficienciesAndLanguagesComponent,
    FeaturesAndTraitsComponent,
    TraitsIdealsBondsAndFlawsComponent,
    AppearanceComponent,
    AlliesAnbdOrganisationsComponent,
    CharacterBackstoryComponent,
    AdditionalFeaturesAndTraitsComponent,
    BasicInformationComponent,
    CantripsComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    LevelFourComponent,
    LevelFiveComponent,
    LevelSixComponent,
    LevelSevenComponent,
    LevelEightComponent,
    LevelNineComponent,
    SpellsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
