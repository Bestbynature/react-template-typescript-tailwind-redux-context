import { Suspense } from "react";
import { PageLoadingSpinner } from "src/components";
import useModal from "src/contexts/modal-contexts/use-modal";
import { Routes, Route } from "react-router-dom";
import { routePaths, routeComponents } from "./routesconfig";
import ModalBox from "src/components/modals";
import UnprotectedLayout from "src/layout/unprotected-layout";

const AppRoutes = () => {
  const { isModalOpen } = useModal();
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      {isModalOpen && <ModalBox />}
      <Routes>
        {/* Unprotected Routes */}
        <Route path={routePaths.home} element={<UnprotectedLayout />}>
          <Route index element={<routeComponents.home />} />
        </Route>

        {/* -------------------  Catch All Other Routes ------------------ */}
        {/* <Route path="*" element={<routeComponents.notFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
