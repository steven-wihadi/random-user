import './Breadcrumb.component.scss';

export default function Breadcrumb() {
  return (
    <div className='breadcrumb'>
      <span>Home</span>
      <span>/</span>
      <span className='active-page'>Example Page</span>
    </div>
  );
}