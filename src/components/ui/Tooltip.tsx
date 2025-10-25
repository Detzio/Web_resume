import type { TooltipProps } from '../../types';
import { useTooltip } from '../../hooks/useTooltip';
import './Tooltip.css';

/**
 * Composant Tooltip accessible pour afficher des informations supplémentaires
 * Utilise ARIA pour l'accessibilité
 */
const Tooltip = ({
  content,
  children,
  position = 'top',
}: TooltipProps) => {
  const { isVisible, showTooltip, hideTooltip, tooltipRef } = useTooltip();

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      aria-describedby={isVisible ? 'tooltip' : undefined}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={`tooltip tooltip--${position}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
