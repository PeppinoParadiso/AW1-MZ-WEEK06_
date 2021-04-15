import {Col, Table} from 'react-bootstrap';
import { iconDelete, iconEdit } from '../icons';
import { useState } from 'react';

function ExamScores(props) {
  return (
    <Col>
      <ExamTable exams={props.exams} courses={props.courses}/>
    </Col>
  );
}

function ExamTable(props) {
  const [exams, setExams] = useState([...props.exams]);

  const deleteExam = (code) => {
    setExams((exams) => exams.filter(ex => ex.code !== code));
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Exam</th>
          <th>Score</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        exams.map((ex) => <ExamRow key={ex.code}
          exam={ex}
          examName={props.courses.filter(c => c.code === ex.code)[0].name}
          deleteExam={deleteExam}
        />)
        }
      </tbody>
    </Table>
  );
}

function ExamRow(props) {
  return <tr><ExamRowData exam={props.exam} examName={props.examName}/><RowControl examCode={props.exam.code} deleteExam={props.deleteExam}/></tr>;
}

function ExamRowData(props) {
  return (<>
      <td>{props.examName}</td>
      <td>{props.exam.score}</td>
      <td>{props.exam.date.format('DD/MM/YYYY')}</td>
    </>
  );
}

function RowControl(props) {
  return <td>{iconEdit} <span onClick={() => props.deleteExam(props.examCode)}>{iconDelete}</span></td>;
}

export {ExamScores};