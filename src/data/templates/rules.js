// src/data/templates/rules.js
// Raw static markdown rule definitions imported from .md files.

import frontend from './markdown/stacks/frontend.md?raw'
import backend from './markdown/stacks/backend.md?raw'
import mobile from './markdown/stacks/mobile.md?raw'
import fullstack from './markdown/stacks/fullstack.md?raw'
import data from './markdown/stacks/data.md?raw'
import other from './markdown/stacks/other.md?raw'

import sdgHack from './markdown/scenarios/sdg-hack.md?raw'
import generalHack from './markdown/scenarios/general-hack.md?raw'
import school from './markdown/scenarios/school.md?raw'
import side from './markdown/scenarios/side.md?raw'
import internship from './markdown/scenarios/internship.md?raw'

import win3hr from './markdown/windows/3hr.md?raw'
import winDay from './markdown/windows/day.md?raw'
import winLong from './markdown/windows/long.md?raw'

import teamSolo from './markdown/teams/solo.md?raw'
import teamPair from './markdown/teams/pair.md?raw'
import teamGroup from './markdown/teams/team.md?raw'

import deployVercel from './markdown/deploys/vercel.md?raw'
import deployServer from './markdown/deploys/server.md?raw'
import deployPages from './markdown/deploys/pages.md?raw'
import deployNone from './markdown/deploys/none.md?raw'

import sveltekit from './markdown/frameworks/sveltekit.md?raw'
import rust from './markdown/frameworks/rust.md?raw'
import deepseek from './markdown/tools/deepseek.md?raw'

export const STACK_RULES = {
  frontend,
  backend,
  mobile,
  fullstack,
  data,
  other,
}

export const SCENARIO_RULES = {
  'sdg-hack': sdgHack,
  'general-hack': generalHack,
  school,
  side,
  internship,
}

export const WINDOW_RULES = {
  '3hr': win3hr,
  day: winDay,
  long: winLong,
}

export const TEAM_RULES = {
  solo: teamSolo,
  pair: teamPair,
  team: teamGroup,
}

export const DEPLOY_BLOCKS = {
  vercel: deployVercel,
  server: deployServer,
  pages: deployPages,
  none: deployNone,
}

export const FRAMEWORK_RULES = {
  sveltekit,
  rust,
}

export const ADDITIONAL_TOOL_RULES = {
  deepseek,
}
