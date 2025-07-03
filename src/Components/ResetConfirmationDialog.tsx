import React from "react";

interface ResetConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ResetConfirmationDialog: React.FC<ResetConfirmationDialogProps> = ({
  onConfirm,
  onCancel
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Reset Quiz?</h3>
        <p>
          Are you sure you want to start over? Your current progress will be lost.
        </p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-btn">
            Yes, Reset
          </button>
          <button onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};