import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ApartmentGiftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🏠 New Apartment Gifts 🏠
          </h1>
          <p className="text-gray-600">
            Help us make our new place in Palo Alto feel like home!
          </p>
        </div>

        {/* Timing Notice */}
        <Card className="shadow-lg border-amber-200 bg-amber-50">
          <CardContent className="text-center py-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center justify-center gap-2">
              📅 Important Timing
            </h3>
            <p className="text-amber-700">
              Please send gifts <strong>after July 25th</strong> to ensure we're
              settled in our new place!
            </p>
          </CardContent>
        </Card>

        {/* Shipping Address Section */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              📦 Shipping Address
            </CardTitle>
            <CardDescription>Send packages to our new home</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                🏡 New Address:
              </h3>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">Alex & Sierra Godfrey</p>
                <p>345 Sheridan Ave</p>
                <p>Unit 124</p>
                <p>Palo Alto, CA 94306</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gift Suggestions */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              💡 Gift Ideas
            </CardTitle>
            <CardDescription>
              Things that would help us settle in
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <div className="text-lg mb-1">🍽️</div>
                <p className="font-medium text-green-800">Kitchen Essentials</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <div className="text-lg mb-1">🛋️</div>
                <p className="font-medium text-purple-800">Home Decor</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <div className="text-lg mb-1">🌱</div>
                <p className="font-medium text-orange-800">Plants</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg text-center">
                <div className="text-lg mb-1">🤖</div>
                <p className="font-medium text-pink-800">
                  Home Automation / Tech
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              📞 Questions?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Need to coordinate delivery or have questions about timing?
            </p>
            <div className="space-y-1 text-sm">
              <p className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span>sierra@godfrey.email</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📱</span>
                <span>(585) 667-4232</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <Card className="shadow-lg bg-gradient-to-r from-blue-100 to-green-100">
          <CardContent className="text-center py-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🙏 Thank You!
            </h3>
            <p className="text-gray-700">
              We're so excited to start this new chapter in Palo Alto! Your
              thoughtful gifts will help make our apartment feel like home. We
              can't wait to have you over once we're all settled in!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">
            With gratitude, Alex & Sierra 🏠
          </p>
        </div>
      </div>
    </div>
  )
}
