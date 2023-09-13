export default function ToggleButton({ isChecked, setIsChecked }) {
  return (
    <div style={style.container}>
      <p style={style.label}>Indonesia</p>
      <div className="form-switch">
        <input className="form-check-input" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </div>
      <p style={style.label}>English</p>
    </div>
  );
}

const style = {
  container: {
    display: 'flex',
    gap: '10px',
    textAlign: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: '18px',
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
};
