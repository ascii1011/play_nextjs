import axios from 'axios';

const triggerDag = async (dagId, runId, executionDate, conf) => {
  try {
    const response = await axios.post(`/api/experimental/dags/${dagId}/dag_runs`, {
      run_id: runId,
      conf: conf,
      execution_date: executionDate
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default triggerDag;
