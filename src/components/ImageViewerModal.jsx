import { useEffect, useState } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import './ImageViewerModal.css';

export default function ImageViewerModal({
  isOpen,
  imageSrc,
  imageAlt,
  title,
  fileName,
  fileSize,
  onClose
}) {
  const [viewMode, setViewMode] = useState('fit'); // 'fit' | 'actual'

  // Handle escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !imageSrc) return null;

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'fit' ? 'actual' : 'fit'));
  };

  return (
    <div
      className="image-viewer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${title || fileName || 'Project screenshot'}`}
    >
      <div
        className="image-viewer-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="image-viewer-header">
          <div className="image-viewer-meta">
            <span className="image-viewer-title">{title}</span>
            {(fileName || fileSize) && (
              <span className="image-viewer-details">
                {fileName && <span className="image-file-name">{fileName}</span>}
                {fileName && fileSize && <span className="image-meta-dot">•</span>}
                {fileSize && <span className="image-file-size">{fileSize}</span>}
              </span>
            )}
          </div>

          <div className="image-viewer-actions">
            <button
              type="button"
              className={`viewer-btn ${viewMode === 'actual' ? 'active' : ''}`}
              onClick={toggleViewMode}
              title={viewMode === 'fit' ? 'View actual size (100%)' : 'Fit to screen'}
              aria-label={viewMode === 'fit' ? 'View actual size' : 'Fit to screen'}
            >
              {viewMode === 'fit' ? (
                <>
                  <Maximize2 size={18} />
                  <span className="btn-label">Actual Size</span>
                </>
              ) : (
                <>
                  <Minimize2 size={18} />
                  <span className="btn-label">Fit to Screen</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="viewer-btn viewer-close-btn"
              onClick={onClose}
              title="Close preview (Esc)"
              aria-label="Close image viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Image Content Area */}
        <div className={`image-viewer-body ${viewMode === 'actual' ? 'actual-mode' : 'fit-mode'}`}>
          <img
            src={imageSrc}
            alt={imageAlt || title || 'Project screenshot preview'}
            className={`viewer-image ${viewMode === 'actual' ? 'actual' : 'fit'}`}
          />
        </div>
      </div>
    </div>
  );
}
