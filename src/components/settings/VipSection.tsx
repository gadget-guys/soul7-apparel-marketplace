import { Progress } from "@/components/ui/progress";

const VipSection = () => {
  // This would be fetched from your backend
  const mockData = {
    totalSpent: 1250,
    points: 450,
    nextTier: 1000,
    currentTier: "Silver"
  };

  const progress = (mockData.points / mockData.nextTier) * 100;

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">VIP Status: {mockData.currentTier}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {mockData.points} points towards next tier ({mockData.nextTier - mockData.points} points needed)
          </p>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Spent</h3>
          <p className="text-2xl font-bold">${mockData.totalSpent}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Points Balance</h3>
          <p className="text-2xl font-bold">{mockData.points} points</p>
        </div>
      </div>
    </div>
  );
};

export default VipSection;