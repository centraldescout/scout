import { ReactNode } from 'react'
import { colors, spacing } from './design-tokens'
export function UICard({children}:{children:ReactNode}){return(<div style={{background:colors.surface,border:`1px solid ${colors.border}`,borderRadius:18,padding:spacing.lg}}>{children}</div>)}
