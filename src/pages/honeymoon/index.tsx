import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function HoneymoonFundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            💕 Our Honeymoon Fund 💕
          </h1>
          <p className="text-gray-600">
            Help us create memories on our dream honeymoon!
          </p>
        </div>

        {/* Venmo QR Code Section */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              📱 Scan to Pay with Venmo
            </CardTitle>
            <CardDescription>Quick and easy mobile payment</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-inner">
              <Image
                src="/venmo.jpeg"
                alt="Venmo QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 text-center">
              Venmo username @Sierra-Apicella
            </p>
          </CardContent>
        </Card>

        {/* Alternative Payment Methods */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">or</p>
        </div>

        {/* Check Details Section */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              ✉️ Send or Bring a Check
            </CardTitle>
            <CardDescription>
              Bring a check to the wedding or mail it to the address below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                📮 Mailing Address:
              </h3>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">Alex & Sierra</p>
                <p>5509 E Lake Rd #386</p>
                <p>Dewittville, NY 14728</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                📝 Check Details:
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Make payable to:</span>
                  <span>Alex & Sierra Godfrey</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Memo line:</span>
                  <span>"Honeymoon Fund"</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <Card className="shadow-lg bg-gradient-to-r from-pink-100 to-purple-100">
          <CardContent className="text-center py-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🙏 Thank You!
            </h3>
            <p className="text-gray-700">
              Your generous gift will help us create unforgettable memories as
              we start our journey together. We can't wait to share our
              adventures with you!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">With love, Sierra & Alex ❤️</p>
        </div>
      </div>
    </div>
  )
}
