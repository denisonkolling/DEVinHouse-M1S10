import logo from '/src/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faSearch,
	faShoppingCart,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<div>
			<header>
				<div className="p-4 text-center bg-white border-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
								<a href="#!" className="ms-md-2">
									<img src={logo} height="35" />
								</a>
							</div>

							<div className="col-md-4">
								<form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
									<input
										autoComplete="off"
										type="search"
										className="form-control rounded"
										placeholder="Search everything online and in store..."
									/>
									<span className="input-group-text border-0 d-none d-lg-flex">
										<a href="">
										<FontAwesomeIcon icon={faSearch} />
										</a>
									</span>
								</form>
							</div>

							<div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
								<div className="nav-icons d-flex">
									<a className="text-reset me-3" href="#">
										<span>
											<FontAwesomeIcon icon={faHeart} />
										</span>
									</a>

									<a className="text-reset me-3" href="#">
										<span>
											<FontAwesomeIcon icon={faUser} />
										</span>
									</a>

									<a className="text-reset me-3" href="#">
										<span>
											<FontAwesomeIcon icon={faShoppingCart} />
										</span>
									</a>

									<a className="text-reset me-3" href="#">
										<i className="fa-solid fa-moon"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
