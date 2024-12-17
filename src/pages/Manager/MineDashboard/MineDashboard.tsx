import { Container } from "react-bootstrap";
import ManagerHeader from "../../../components/ManagerHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api";

const MineDashboard = () => {
  const [mine, setMine] = useState<any>({});
  const [regions, setRegions] = useState<any[]>([]);

  const { id } = useParams();

  useEffect(() => {
    async function loadMine() {
      try {
        const { data } = await api.get(`/manager/mines/${id}`);
        setMine(data.mine || {});
      } catch (err) {
        console.error(err);
      }
    }

    loadMine();
  }, [id]);

  useEffect(() => {
    async function loadRegions() {
      try {
        const { data } = await api.get(`/manager/mines/${id}/regions`);
        setRegions(data.regions || []);
      } catch (err) {
        console.error(err);
      }
    }

    loadRegions();
  }, [id]);

  return (
    <div>
      <ManagerHeader />
      <Container></Container>
    </div>
  );
};

export default MineDashboard;
