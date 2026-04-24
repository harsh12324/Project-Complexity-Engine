import HistoryList from '../components/dashboard/HistoryList';

function HistoryPage({ historyItems, onLoadHistory, onClearHistory }) {
  return <HistoryList items={historyItems} onLoad={onLoadHistory} onClear={onClearHistory} />;
}

export default HistoryPage;
