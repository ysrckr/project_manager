import EditProject from './EditProject'
import { CgCloseO } from 'react-icons/cg'
const Modal = ({ isOpen, project, close }) => {
	return (
		<div className={`modal ${isOpen && 'open'}`}>
			<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title">{project.name}</h3>
					<button
						className="modal-close"
						onClick={() => close(false)}>
						<CgCloseO />
					</button>
				</div>
				<div className="modal-body">
					<EditProject project={project} />
				</div>
			</div>
		</div>
	)
}
export default Modal
