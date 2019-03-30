import React from 'react'
import {
  TabPostIcon,
  TabTechIcon,
  TabRadarIcon,
  TabShareIcon,
  TabUserIcon,
  TabCityIcon,
  TabJobIcon,
  TabWikiIcon,
  TabVideoIcon,
  TabRepoIcon,
  TabCheatsheetIcon,
  // communities
  TabPlIcon,
  TabFrontendIcon,
  TabBackendIcon,
  TabMobileIcon,
  TabAIIcon,
  TabDesignIcon,
  TabBlockChainIcon,
  // user
  TabLikesIcon,
  TabPublishIcon,
  TabBillingIcon,
  TabCommentsIcon,
  TabSettingsIcon,
  TabFavoritesIcon,
} from './styles'

/*
   const supportIcons = [
   'group',
   'company',
   'publish',
   'billing',
   'comments',
   'settings',
   'likes',
   'favorites',
   ]
 */

const TabIcon = ({ raw, active, small }) => {
  switch (raw) {
    case 'tech':
      return <TabTechIcon active={active} small={small} />

    case 'radar':
      return <TabRadarIcon active={active} small={small} />

    case 'share':
      return <TabShareIcon active={active} small={small} />

    case 'user':
      return <TabUserIcon active={active} small={small} />

    case 'job':
      return <TabJobIcon active={active} small={small} />

    case 'city':
      return <TabCityIcon active={active} small={small} />

    case 'wiki':
      return <TabWikiIcon active={active} small={small} />

    case 'video':
      return <TabVideoIcon active={active} small={small} />

    case 'repo':
      return <TabRepoIcon active={active} small={small} />

    case 'cheatsheet':
      return <TabCheatsheetIcon active={active} small={small} />

    // communities
    case 'pl':
      return <TabPlIcon active={active} small={small} />

    case 'frontend':
      return <TabFrontendIcon active={active} small={small} />

    case 'backend':
      return <TabBackendIcon active={active} small={small} />

    case 'mobile':
      return <TabMobileIcon active={active} small={small} />

    case 'ai':
      return <TabAIIcon active={active} small={small} />

    case 'design':
      return <TabDesignIcon active={active} small={small} />

    case 'blockchain':
      return <TabBlockChainIcon active={active} small={small} />

    case 'favorites':
      return <TabFavoritesIcon active={active} small={small} />

    case 'likes':
      return <TabLikesIcon active={active} small={small} />

    case 'publish':
      return <TabPublishIcon active={active} small={small} />

    case 'billing':
      return <TabBillingIcon active={active} small={small} />

    case 'comments':
      return <TabCommentsIcon active={active} small={small} />

    case 'settings':
      return <TabSettingsIcon active={active} small={small} />

    default:
      return <TabPostIcon active={active} small={small} />
  }
}

export default TabIcon
