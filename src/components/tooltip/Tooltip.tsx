import { useState } from 'react'

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react'

export default function Tooltip() {
  const [open, setOpen] = useState(false)

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'start',
        crossAxis: false,
      }),
      shift(),
    ],
  })

  // Event listeners to change the open state
  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  // Role props for screen readers
  const role = useRole(context, { role: 'tooltip' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])

  return (
    <>
      <button ref={reference} {...getReferenceProps()}>
        Hover or focus me
      </button>
      <FloatingPortal>
        {open && (
          <div
            className="rounded bg-gray-900 px-2 py-0.5 text-gray-50 shadow"
            ref={floating}
            style={{
              // Positioning styles
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps()}
          >
            {`I'm a tooltip!`}
          </div>
        )}
      </FloatingPortal>
    </>
  )
}
